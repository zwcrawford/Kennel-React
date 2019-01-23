import React, { Component } from 'react';

class AnimalList extends Component {
    render() {

      this.props.animals.map(animal => {
        animal.owners = "";
        animal.owner.map(name => {
            let i = name - 1; // Counter
            if (animal.owners === "") {
                animal.owners = this.props.owners[i].name
            } else {
                animal.owners += `, ${this.props.owners[i].name} `
            }
            return animal.owners
        })
      })
      return (
          <article className="animals">
          {
              this.props.animals.map(animal =>
                <div key={ animal.id }>
                  {"Name:"} {animal.name}<br />
                  {"Owner:"} {animal.owners}
                </div>
              )
          }
          </article>
      )
    }
}

export default AnimalList