import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {  BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{CarouselModule}from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    PaymentComponent,
    AllordersComponent,
    ForgetpasswordComponent,
    SearchPipe,
    CategoryDetailsComponent,
    BrandDetailsComponent,
    WhishlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    NgxPaginationModule ,
    NgxSpinnerModule,
    FormsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
