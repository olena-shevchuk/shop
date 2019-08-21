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
17. Element <h1 #appTitle></h1> is added to AppComponent's layout. Title for application is installed using @ViewChild.
18. When a mouse is over CartItemComponent then a background color of the component is changed. BackgroundColorDirective is created and registered in SharedModule. @HostBinding, @HostListener decorators are used.
19. Directive ngStyle changes a color of an unavailable product to grey.

20. CartService is modified to have an ability making a cart empty.
21. LocalStorageService is created for work with window.localStorage. It has methods for setting a value, getting a value from the storage and removing it from there.
22. ConfigOptionsService is created to store a settings object. This service provides methods for setting and retrieving data.
23. ConstantService is created as an object literal { App: "TaskManager", Ver: "1.0" }.
24. GeneratorService is created for generating a random sequence of n characters from a-z, A-Z, 0-9.
25. GeneratorFactoryService(n: number) is created to provide a generated string.
26. AboutComponent is created and all mentioned services are injected into it. Decorator @Optional() is also used.
27. BorderDirective adds a handler of a click event to a host element. It sets a red border to "Buy" button.

28. Date pipe is used for logonTime property of user in about.component.ts
29. Currency pipe is used for product's price in product.component.html, cart-item.component.html and for total price in cart.component.html
30. Method getProducts() in ProductsService returns observable. Async pipe is used for displaying data from ProductsService.
31. OrderByPipe is created for sorting an array of objects. The pipe has two parameters: a string which is a field for sorting an array and a boolean which determines a sorting order. By default, a sort is in an descending order.
32. OrderByPipe is used for sorting products in a cart.
33. Products could be sorted by their prices, quantities or names.