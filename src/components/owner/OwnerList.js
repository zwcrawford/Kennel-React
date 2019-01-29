import React, { Component } from 'react';

class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <article key={owner.id}>
                        {owner.name}
                    </article>
                )
            }
            </section>
        )
    }
}

export default OwnerList