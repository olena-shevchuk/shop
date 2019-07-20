1. ProductComponent is created and used in AppComponent.
2. Properties for ProductComponent are added and displayed.
3. ProductsService is created. It returns products. Model of product is described as an interface.
4. ProductListComponent is created. It used ProductsService. Data is displayed using directive *ngFor.
5. CartComponent is created and used in AppComponent's template. It reflects a list of products which are bought.
6. The list of products which are bought is got from CartService.
7. Directive *ngIf + else is used for displaying CartComponent if the last one is not empty. If it is empty, a message about an empty cart is shown.
8. Total cost of products is counted.

9. Application is devided into 5 modules: AppModule, CartModule, ProductsModule, OrdersModule and SharedModule.
10. ProductListComponent is modified to delegate displaying of list of products to ProductComponent.
11. ProductListComponent adds a selected product to the cart if that product is available. If it's not, a button for adding to the cart is disabled.
12. ProductComponent is a presentational component with inputs and outputs. It has not any dependencies.
13. Total quantity of products in the cart is counted.
14. СartItemComponent is created to display one product from CartComponent.
15. Abilities to change quantity of products and to remove a product from a cart are added.
16. CartService is modified to give datas to CartComponent and to count an quantity and a sum of products.