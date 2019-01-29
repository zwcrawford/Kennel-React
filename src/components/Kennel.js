import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
import AnimalList from "./animal/AnimalList";
import "./Kennel.css"


class Kennel extends Component {
    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Scrappy" },
        { id: 2, name: "Scout" },
        { id: 3, name: "Luna" },
        { id: 4, name: "Minnie" },
        { id: 4, name: "TeeJay" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel