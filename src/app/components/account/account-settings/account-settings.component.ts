import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../../objekte/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {


  constructor(private userService: UserService) { }
  user?: User;


  @Output() onSignin = new EventEmitter<boolean>()

  passwort = '';
  wpasswort = '';

  ngOnInit(): void {
    this.user = this.userService.getUser()
 }
  changePasswort() {
    if (this.passwort == this.wpasswort) {
      this.userService.changePasswort(this.passwort).subscribe(
        data => {
          if (data) {
            alert('Passwort wurde erfolgreich geändert')
            location.reload()
          } else
            alert('Passwort konnte nicht geändert werden')
            
        })
      this.userService.userSpeichern({ name: this.user?.name ?? 'public', passwort: this.passwort })
     // this.onSignin.emit(true)
    } else {
      alert('Bitte stellen Sie sicher, dass Sie das Passwort richtig eingegeben haben')
    }

  }
  abmelden() {
    this.userService.userSpeichern({ name: 'public', passwort: 'public' })
    this.onSignin.emit(true)
  }

  deleteAccount() {
    if (confirm('Möchten Sie Ihren Account wirklich löschen? (diese Aktion kann nicht rückgängig gemacht werden)')) {
      this.userService.deleteAccount(this.user || {name:'',passwort:''}).subscribe(data => {
        if (data) {
          this.userService.userSpeichern({ name: 'public', passwort: 'public' })
          alert('Der Account wurde erfolgreich gelöscht')
          this.onSignin.emit(true)
        } else
        alert('Der Account konnte nicht gelöscht werden.')
      })
    }

  }

}
