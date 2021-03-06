/* Especificação do Jasmine para as diretivas */
(function () {
    'use strict';

    describe('AngularJS Blog Application', function () {
        
        beforeEach(module('blogDirectives'));

        describe('Unit test of menu directive', function () {
            var rootScope, compile;

            beforeEach(module('partials/menu.html'));

            beforeEach(inject(function (_$compile_, _$rootScope_) {
                compile = _$compile_;
                rootScope = _$rootScope_;
            }));

            it('Replaces the menu attribute with the menu', function () {
                var elm = angular.element(
                    "<div blg-menu menu-title=\"AngularJS Blog\"></div>"
                );
                var menu = compile(elm)(rootScope);
                rootScope.$digest();
                
                expect(menu.html()).toContain("AngularJS Blog");
            });
        });

    });

}());