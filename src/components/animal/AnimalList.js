import React, { Component } from 'react'
    class AnimalList extends Component {
        render() {
            return (
                <section className="animals">
                {
                this.props.animals.map(animal =>
                    <article>
                        {animal.name}
                    </article>
                )
                }
                </section>
            )
        }
    }

export default AnimalList