$(document).ready(function () {
    // hide error messages
    $('.errMsg').toggleClass('unble', true);

    // get elements
    let pseudo = document.querySelector('#pseudo'), pseudoErr = document.querySelector('#pseudoErr');
    let email = document.querySelector('#email'), emailErr = document.querySelector('#emailErr');
    let pwd = document.querySelector('#pwd'), pwdErr = document.querySelector('#pwdErr');
    let chkpwd = document.querySelector('#chkpwd'), chkpwdErr = document.querySelector('#chkpwdErr');
    let submit = document.querySelector('button[type="submit"]');

    // values set during each validation and usefull for global validation
    let validPseudo = false, validEmail = false;
    let validPwd = false, validChkpwd = false;

    // TODO voir s'il faut passer par un objet :
    let isValidForm = {
        'validPseudo': false,
        'validEmail': false,
        'validPwd': false,
        'validChkpwd': false,
        'validSoFar': false,
    };

    /* EVENT LISTENERS */
    // nb : each listener sets the value of validItem (ex : validPseudo, validMail...)
    pseudo.addEventListener('change', function (e) {
        validPseudo = isValidPseudo(e.target.value);
        if (!validPseudo) {
            pseudoErr.classList.remove('unvisible');
            setValid(pseudo, true);
        } else {
            pseudoErr.classList.add('unvisible');
            setValid(pseudo, false);
        }
    });

    email.addEventListener('change', function (e) {
        validMail = isValidMail(e.target.value);
        if (!validEmail) {
            emailErr.classList.remove('unvisible'); // allows to make error message appear
            setValid(email, true);
        } else {
            emailErr.classList.add('unvisible'); // allows to make error message disappear
            setValid(email, false);
        }
    });

    pwd.addEventListener('change', function (e) {
        let mdp = e.target.value;
        validPwd = isValidPwd(mdp);
        if (!validPwd) {
            pwdErr.classList.remove('unvisible');
            setValid(pwd, true);
        } else {
            pwdErr.classList.add('unvisible');
            setValid(pwd, false);
        }
    });

    chkpwd.addEventListener('change', function (e) {
        let chkmdp = e.target.value;
        validChkpwd = isValidChkpwd(pwd.value, chkmdp);
        if (!validChkpwd) {
            chkpwdErr.classList.remove('unvisible');
            setValid(chkpwd, true);
        } else {
            chkpwdErr.classList.add('unvisible');
            setValid(chkpwd, false);
        }
    });

    submit.addEventListener('click', function (e) {
        e.preventDefault();
        if (sendForm()) {
            alert('Account created');
            location.reload();
        } else {
            alert('check validation rules please');
        }
    });

    /* AUXILIARIES FUNCTIONS */
    // returns true if pseudo is valid false otherwise
    function isValidPseudo(pseudo) {
        let lenght = pseudo.length;
        return (lenght >= 3 && lenght <= 10);
    };
    // returns true if mail is valid false otherwise
    function isValidMail(mail) {
        let regex = /\S+@\S+\.\S+/;
        // TODO rajouter à la regex les 8 caractères
        // console.warn(`mail : ${mail}`);
        validEmail = regex.test(mail);
        return validEmail;
    }

    function isValidPwd(mdp) {
        /* BASED ON THIS ARTICLE : https://www.geeksforgeeks.org/check-if-a-string-contains-uppercase-lowercase-special-characters-and-numeric-values/
        If the ASCII value lies in the range of [65, 90], then it is an uppercase letter.
        If the ASCII value lies in the range of [97, 122], then it is a lowercase letter.
        If the ASCII value lies in the range of [48, 57], then it is a number.
        If the ASCII value lies in the ranges [32, 47], [58, 64], [91, 96] or [123, 126], then it is a special character
        
        
        regex = “^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$” 
        where, 
        

        ^ represents the starting of the string.
        (?=.*[a-z]) represent at least one lowercase character.
        (?=.*[A-Z]) represents at least one uppercase character.
        (?=.*\\d) represents at least one numeric value.
        (?=.*[-+_!@#$%^&*., ?]) represents at least one special character.
        . represents any character except line break.
        + represents one or more times.
*/
        var pattern = new RegExp(
            "^(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$"
        );
        // console.warn(pattern.test(mdp));
        return pattern.test(mdp);
    }
    // returns true if mdp1 == mdp2
    function isValidChkpwd(mdp1, mdp2) {
        return (mdp1 === mdp2);
    }
    // this function sets the display of a valid (bool) or invalid (!bool) element
    function setValid(element, bool) {
        if (bool) {
            element.classList.toggle('valid', false);
            element.classList.toggle('invalid', true);
        } else {
            element.classList.toggle('valid', true);
            element.classList.toggle('invalid', false);
        }
    }

    function sendForm() {
        return validPseudo && validEmail && validPwd && validChkpwd;
    }
})