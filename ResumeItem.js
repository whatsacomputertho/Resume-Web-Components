import {LitElement, html, css} from 'lit-element';

class ResumeItem extends LitElement
{
    constructor()
    {
        super();
        this.itemTitle = "Item";
        this.itemDescription = "Description";
        this.itemTimeFrame = "Jan. 2018 - Jan. 2020";
        this.itemPoints = ["Point One", "Point Two", "Etc."];
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
            
            #education-table
            {
                grid-template-columns: 12vw 31vw 11vw
            }

            .resume-education-column-right
            {
                width: 13vw;
            }

            .resume-education-column-left
            {
                width: 13vw;
            }

            .resume-education-column-center
            {
                width: 30vw;
            }

            .resume-item-points
            {
                margin-top: 3px;
                margin-bottom: 1.5vw;
            }
        `;
    }

    render()
    {
        return html`
            <div class="resume-table" id="education-table">
                <div class="resume-education-column-left"><p><b>${this.itemTitle}</b></p></div>
                <div class="resume-education-column-center"><p>${this.itemDescription}</p></div>
                <div class="resume-education-column-right"><p><b>${this.itemTimeFrame}</b></p></th></div>
            </div>
            <ul class="resume-item-points">
                ${this.itemPoints.map(i => html`<li>${i}</li>`)}
            </ul>
        `;
    }

    static get properties()
    {
        return{
            itemTitle: {type: String},
            itemDescription: {type: String},
            itemTimeFrame: {type: String},
            itemPoints: {type: Array}
        }
    }
}

customElements.define('resume-item', ResumeItem);