import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
//import OwnerList from "./owner/OwnerList";
import "./Kennel.css";


class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Scrappy", owner: [1] },
        { id: 2, name: "Scout", owner: [2] },
        { id: 3, name: "Luna", owner: [3] },
        { id: 4, name: "Minnie", owner: [4,1] },
        { id: 4, name: "TeeJay", owner: [5,6] }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={ this.state.locations } />
                <EmployeeList employees={ this.state.employees } />
                <AnimalList animals={ this.state.animals } owners={ this.state.owners } />
            </article>
        )
    }
}

export default Kennel
