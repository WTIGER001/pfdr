import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignComponent } from './campaign/campaign.component';
import { RulebookComponent } from './rulebook/rulebook.component';
import { DbService } from './db.service';
import { EditorComponent } from './editor/editor.component'
import { TinymceModule } from 'angular2-tinymce';
import { CampaignNavComponent } from './campaign-nav/campaign-nav.component';
import { PcListComponent } from './pc-list/pc-list.component';
import { ListDetailDialogComponent } from './list-detail-dialog/list-detail-dialog.component';
import { CharacterComponent } from './character/character.component';

const appRoutes: Routes = [
  { path: 'home', component: CampaignListComponent },
  { path: 'campaign/:id', component: CampaignComponent },
  { path: 'campaign/:id/summary', component: CampaignComponent },
  { path: 'characters', component: PcListComponent },
  { path: 'characters/:pid', component: CharacterComponent },
  { path: 'campaign/:id/npcs', component: CampaignComponent },
  { path: 'campaign/:id/npcs/:nid', component: CampaignComponent },
  { path: 'campaign/:id/rules', component: CampaignComponent },
  { path: 'campaign/:id/sessions', component: CampaignComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CampaignListComponent,
    CampaignComponent,
    RulebookComponent,
    EditorComponent,
    CampaignNavComponent,
    PcListComponent,
    ListDetailDialogComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    TinymceModule.withConfig({
      menubar: false,
      statusbar: false,
      skin_url: '../assets/skins/lightgray'
    })
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }