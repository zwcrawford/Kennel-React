import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./location/LocationList"  // Import LocationList component

// Must export the class Kennel
export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h1>Sunny Farms Kennel</h1>
                <p>We promise to love your pets almost as much as you do!</p>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}
