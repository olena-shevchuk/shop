1. ProductComponent is created and used in AppComponent.
2. Properties for ProductComponent are added and displayed.
3. ProductsService is created. It returns products. Model of product is described as an interface.
4. ProductListComponent is created. It used ProductsService. Data is displayed using directive *ngFor.
5. CartComponent is created and used in AppComponent's template. It reflects a list of products which are bought.
6. The list of products which are bought is got from CartService.
7. Directive *ngIf + else is used for displaying CartComponent if the last one is not empty. If it is empty, a message about the empty cart is shown.
8. Total cost of products is counted.