import { PaymentComponent } from './components/payment/payment.component';
import { authGuard } from './shared/guards/auth.guard';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';

const routes: Routes = [
  {path:"",canActivate:[authGuard] ,component:BlankLayoutComponent ,children:[
    {path:'' ,redirectTo:'home', pathMatch:"full"},
{path:'home', component:HomeComponent , title:'Home'},
{path:'cart', component:CartComponent , title:'Cart'},
{path:'details/:id', component:DetailsComponent, title:'Details'},
{path:'products', component:ProductsComponent ,title:'products'},
{path:'wishlist', component:WhishlistComponent , title:'Wishlist'},
{path:'categories', component:CategoriesComponent , title:'Categoryies'},
{path:'categoryDetails/:id', component:CategoryDetailsComponent ,title:'categories Details'},
{path:'brands', component:BrandsComponent , title:'Brannds'},
{path:'branddetails/:id', component:BrandDetailsComponent , title:'Brand Details'},

{path : 'payment/:id' , component:PaymentComponent ,title:'Payment'},
{path : 'allorders' , component:AllordersComponent , title:'allorders'},
{path : 'forgetpassword' , component:ForgetpasswordComponent , title:'forgetPassword'},
]},
  {path:"",component:AuthLayoutComponent , children:[
    {path:'login' , component:LoginComponent , title:'login'},
    {path:'register' , component:RegisterComponent , title:'Register'},
    {path : 'forget' , component:ForgetpasswordComponent , title:'forget Password'},
  ]},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
