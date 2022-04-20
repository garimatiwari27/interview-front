class ContactCard extends HTMLElement {
  connectedCallback() {
    var contactDetails = JSON.parse(this.attributes.contactDetails.value);
    var location = contactDetails.location;
    var phone = contactDetails.phone;
    var email = contactDetails.email;
    this.innerHTML = 
        `<p><i class="fa fa-map-marker w3-xxlarge w3-margin-right"></i>${location}</p>
         <p><i class="fa fa-phone w3-xxlarge w3-margin-right"></i>${phone}</p>
         <p><i class="fa fa-envelope w3-xxlarge w3-margin-right"></i>${email}</a></p>`;
  }
}

customElements.define("contact-card", ContactCard);

class ProfileCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });

    var profileCardDetails = JSON.parse(
      this.attributes.profileCardDetails.value
    );
    var image = profileCardDetails.image;
    var name = profileCardDetails.name;
    var designation = profileCardDetails.designation;
    var pastExperience = profileCardDetails.pastExperience;
    var address = profileCardDetails.address;
    var email = profileCardDetails.email;
    var mobile = profileCardDetails.mobile;
    var office = profileCardDetails.office;
    shadow.innerHTML = 
    `<style>
       .profile-card {
        box-shadow: 0 8px 8px 0 black;
        width: 500px;
        height: 235px;
        margin: auto;
        margin-top: 10px;
        background-color: rgb(124, 117, 117);
    }
    
    .profile-card-photo {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        margin-top: auto;
        margin-right: auto;
        margin-left: 5px;
        margin-bottom: auto;
        border: 4px solid rgb(220, 217, 217);
    }
    
    p {
        margin: 0;
    }
    
    .contact-info {
        font-size: x-small;
        color: gainsboro;
        padding-left: 2.5em;
    }
    
    .basic-info {
        font-size: smaller;
        color: gainsboro;
        padding-left: 2em;
        font-weight: bold;
    }
    
    
    .vertical-line{ 
        border-left: 1.5px solid gainsboro;
        height: 190px;
        position: relative;
        left:15px;
        top: 2px;
    
      }
       </style>
       
       <div class="profile-card">
            <table>
                <tr>
                    <td><img class="profile-card-photo" src="${image}"
                        alt="Profile picture"></td>
                    <td class="vertical-line"></td>
                    <td>
                        <h3 style="padding-left: 1.5em;color:white;">${name}</h3>
                        <div class="basic-info">
                            <p>${designation}</p>
                            <p>Past Experience - ${pastExperience}</p>
                        </div><br>

                        <h8 style="padding-left: 1.6em;color:white;">Contact Information</h8>
                        <div class="contact-info">
                            <p>${address}</p>
                            <p>${email}</p>
                            <p>M: ${mobile}</p>
                            <p>O: ${office}</p>
                        </div><br>
                    </td>
                </tr>
            </table>
        </div>`;
  }
}

customElements.define("profile-card", ProfileCard);
