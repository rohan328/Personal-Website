import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalystDashboardComponent } from './analyst-dashboard/analyst-dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { OrderPanelComponent } from './order-panel/order-panel.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


//prime ng
import {InputTextModule} from 'primeng/inputtext';
import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {InputNumberModule} from 'primeng/inputnumber';
import {SplitterModule} from 'primeng/splitter';


@NgModule({
  declarations: [
    AppComponent,
    AnalystDashboardComponent,
    ChartComponent,
    OrderPanelComponent,
    BottomPanelComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    FormsModule,
    //prime ng
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    SliderModule,
    InputNumberModule,
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
