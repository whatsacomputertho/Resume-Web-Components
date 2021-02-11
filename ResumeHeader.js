import {LitElement, html, css} from 'lit-element';

class ResumeHeader extends LitElement
{
    constructor()
    {
        super();
        this.name = "Firstname Lastname";
        this.title = "Human";
        this.contact = "(555) 555-5555 | email@email.com";
        this.primaryAddressHeader = "Permanent Address";
        this.primaryAddressStreet = "Permanent Address L1";
        this.primaryAddressStateZip = "Permanent Address L2";
        this.secondaryAddressHeader = "Current Address";
        this.secondaryAddressStreet = "Current Address L1";
        this.secondaryAddressStateZip = "Current Address L2";
    }

    static get styles()
    {
        return css`
            p
            {
                margin: 0;
            }

            .resume-table
            {
                display: grid;
                grid-template-columns: 11vw 32vw 11vw;
                width: 54vw;
                padding-left: 1vw;
                padding-right: 1vw;
            }

            .resume-header-column-right
            {
                width: 13vw;
            }

            .resume-header-column-left
            {
                width: 13vw;
            }

            .resume-header-column-center
            {
                width: 32vw;
            }

            .address
            {
                text-align: left;
            }

            .contact-info
            {
                text-align: center;
            }
        `;
    }
    
    render()
    {
        return html`
            <div class="header">
                <div class="resume-table">
                    <div class="resume-header-column-left">
                        <p class="address"><b>${this.primaryAddressHeader}</b></p>
                        <p class="address">${this.primaryAddressStreet}</p>
                        <p class="address">${this.primaryAddressStateZip}</p>
                    </div>
                    <div class="resume-header-column-center">
                        <p class="contact-info"><b>${this.name}</b></p>
                        <p class="contact-info">${this.title}</p>
                        <p class="contact-info">${this.contact}</p>
                    </div>
                    <div class="resume-header-column-right">
                        <p class="address"><b>${this.secondaryAddressHeader}</b></p>
                        <p class="address">${this.secondaryAddressStreet}</p>
                        <p class="address">${this.secondaryAddressStateZip}</p>
                    </div>
                </div>
            </div>
            <hr class="rule"/>
        `;
    }
    
    static get properties()
    {
        return{
            name: {type: String},
            title: {type: String},
            contact: {type: String},
            primaryAddressHeader: {type: String},
            primaryAddressStreet: {type: String},
            primaryAddressStateZip: {type: String},
            secondaryAddressHeader: {type: String},
            secondaryAddressStreet: {type: String},
            secondaryAddressStateZip: {type: String}
        };
    }
}

customElements.define('resume-header', ResumeHeader);