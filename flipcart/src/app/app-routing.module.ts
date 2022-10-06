import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';


const routes: Routes = [{
  path:'header',
  component:HeaderComponent
},
{  path:'sidebar',
   component:SidebarComponent   
},
{
  path:'footer',
  component:FooterComponent
},
{
  path:'list-view',
  component:ListViewComponent
},
{
  path:'grid-view',
  component:GridViewComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
