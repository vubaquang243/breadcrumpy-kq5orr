import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, ActivatedRouteSnapshot } from "@angular/router";
import { BreadcrumbsModule } from "@dirkluijk/ngx-breadcrumpy";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductReviewsComponent } from "./product-reviews/product-reviews.component";
import { ProductBreadcrumbResolver } from "./products/product-breadcrumb-resolver.service";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        data: {
          breadcrumb: "Home"
        },
        children: [
          {
            path: "",
            component: HomeComponent
          },
          {
            path: "about",
            component: AboutComponent,
            data: {
              breadcrumb: "About"
            }
          },
          {
            path: "products",
            data: {
              breadcrumb: {
                label: "Products"
              }
            },
            children: [
              {
                path: "",
                component: ProductsComponent
              },
              {
                path: ":id",
                data: {
                  breadcrumb: ProductBreadcrumbResolver
                },
                children: [
                  {
                    path: "",
                    component: ProductDetailsComponent
                  },
                  {
                    path: "reviews",
                    component: ProductReviewsComponent,
                    data: {
                      breadcrumb: "Reviews"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]),
    BreadcrumbsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductReviewsComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
