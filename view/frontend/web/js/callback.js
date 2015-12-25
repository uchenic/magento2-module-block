/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global confirm:true*/
define([
   
    "jquery",
    "jquery/ui",
    'Magento_Ui/js/modal/modal',
    "mage/decorate"
    
], function($){
    "use strict";

    $.widget('mage.callback', {
        _create: function() {
            this.element.on('click',$.proxy(function() {
                $(this.modal_1).modal('openModal');
            },this));
            var d = $.find("[data-bind='']");
            $(d).modal();
            this.modal_1=d;
            var mm=$.find('#pass-number');
            $(mm).on('click',$.proxy(function() {
                var phone = $($.find('#number-text')).val();
                
                $.ajax({
              url: "index.php/rest/default/V1/callback/make",
              contentType:'application/json; charset=UTF-8',

              data: JSON.stringify({ number:phone }),//,
              method: "POST",
              cache: false
            })
              .done(function( html ) {
                alert( html );
              });
            },this));
           
        },

       
    });

    return $.mage.callback;
});