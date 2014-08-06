"use strict";

/*
 * GOAnim Animation Helper (http://ilyax.com)
 *
 * This program is distributed under the terms of the MIT license.
 * Please see the LICENSE.md file for details.
 */

/* Properties */

var animList = {
    ExpandIn: 'expandIn',
    CollapseOut: 'collapseOut',
    FallFromTop: 'fallFromTop',
    RotateOutLeft: 'rotateOutLeft',
    RotateOutRight: 'rotateOutRight',
    RotateInRight: 'rotateInRight',
    RotateInRightWithoutToKeyframe: 'rotateInRightWithoutToKeyframe',
    FadeIn: 'fadeIn',
    FadeOut: 'fadeOut',
    WhirlIn: 'whirlIn',
    WhirlOut: 'whirlOut',
    DropToBottom: 'dropToBottom',
    SlideInSkew: 'slideInSkew',
    SlideOutSkew: 'slideOutSkew',
    TumbleIn: 'tumbleIn',
    TumbleOut: 'tumbleOut',
    SlideDown: 'slideDown',
    SlideUp: 'slideUp',
    SlideLeft: 'slideLeft',
    SlideRight: 'slideRight'
}

function GoAnim(animationElement, anim) {

    var el = document.getElementById(animationElement);

    el.style.animationName = "";
    el.style.offsetWidth = el.offsetWidth;
    el.style.animationName = anim;

}

function Next(animationElement, nextAnimElement, nextAnimation) {

    var el = document.getElementById(animationElement);
    var elNext = document.getElementById(nextAnimElement);

    el.style.display = "none";
    elNext.style.display = "block";

    GoAnim(nextAnimElement, nextAnimation);
}


function Demofunction() {

    GoAnim(divAnimOne, animList.FallFromTop);
}

/*
 * Source MSDN URL
 * http://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 */
function getInternetExplorerVersion()
    // Returns the version of Internet Explorer or a -1
    // (indicating the use of another browser).
{
    var rv = false; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = true;
    }
    return rv;
}