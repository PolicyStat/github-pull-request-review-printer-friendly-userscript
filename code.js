// ==UserScript==
// @name         GitHub Share Code Review
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Show a slimmed printer-friendly version of a code review
// @author       You
// @match        https://github.com/*/pull/*/files/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.slim.min.js#sha256=3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=
// ==/UserScript==

(function() {
    'use strict';

    $('.review-comment-contents h4 .text-gray').remove();
    $('.review-thread-reply').remove();
    $('.last-review-thread').remove();
    $('#partial-discussion-header').remove();
    $('.pagehead').remove();
    $('.pr-toolbar').remove();
    $('.tabnav').remove();
    $('.js-header-wrapper').remove();
    $('.file-header').remove();
})();
