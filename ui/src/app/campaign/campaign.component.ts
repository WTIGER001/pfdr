import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DbService } from '../db.service'
import { Database, Campaign, Book } from '../model'

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  separatorKeys = [",", " "]
  name: string
  gamemasters: string[]
  players: string[]
  db: Database = new Database()
  campaign: Campaign = new Campaign()

  constructor(public _dbService: DbService) {
    this.campaign = new Campaign()
    this.campaign.gameMasters.push("john.bauer.iii@gmail.com")

    this._dbService.db.subscribe(d => {
      console.log("Setting DB " + JSON.stringify(d));
      this.db = d
    })
    this._dbService.campaign.subscribe(c => {
      console.log("Retrieved Campaign")
      this.campaign = c
    })
  }

  ngOnInit() {

  }

  public onRemoving(tag): Observable<any> {
    const confirm = window.confirm('Do you really want to remove this tag?');
    return Observable
      .of(tag)
      .filter(() => confirm);
  }

  public notSelected(book: Book) {
    if (this.campaign.rulebooks != undefined) {
      for (let i = 0; i < this.campaign.rulebooks.length; i++) {
        if (book.name === this.campaign.rulebooks[i].name) {
          console.log(book.name + " IS SELECTED")
          return false
        }
      }
    }
    return true
  }

  public selectBook(book: Book) {
    let alreadySelected = !this.notSelected(book)
    if (alreadySelected) {
      for (let i = 0; i < this.campaign.rulebooks.length; i++) {
        if (this.campaign.rulebooks[i].name === book.name) {
          this.campaign.rulebooks.splice(i, 1);
          break
        }
      }
    } else {
      this.campaign.rulebooks.push(book)
    }
  }

  public descriptionChanged(event: any) {
    console.log("Description changed " + event)
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      // headers.append('Content-Type', 'multipart/form-data');
      // headers.append('Accept', 'application/json');
      // let options = new RequestOptions({ headers: headers });
      // this.http.post(`${this.apiEndPoint}`, formData, options)
      //     .map(res => res.json())
      //     .catch(error => Observable.throw(error))
      //     .subscribe(
      //         data => console.log('success'),
      //         error => console.log(error)
      //     )
    }
  }
}
