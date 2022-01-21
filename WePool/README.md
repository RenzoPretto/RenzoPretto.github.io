# Project proposal: Carpooling service

## Outline

This proposal is to create a service which allows users to find other users who regularly travel to a location and share their resources in order to lower the burden of arranging their own transport.

## Design

The service will support three types of account: users, moderators, and administrators. Administrators will be able to update the website’s services and post messages to all users and moderators. Moderators will be able to set a target location, which users are able to subscribe to if approved by a moderator. Users will be able to subscribe to a target location and set their own location and vehicle capabilities.

Users will also be able to set preferences in the service for arrival time range for the subscribed location, departure time range for the subscribed location, maximum distance, vehicle capacity, and vehicle rules. They will also be able to remove themselves from a group and report other group members.

If two or more users are subscribed to the same location, the service will attempt to match them into groups according to a set of rules. 

* Is there an ideal arrival and departure time for the subscribed location that is included in all users’ arrival and departure time ranges?
* For each user, is the distance to all other group members within the maximum distance limit?
* For each user, is the vehicle capacity greater than or equal to the number of group members?
* For each user, are the vehicle rules compatible with all other group members’ preferences? This can include things like whether food is allowed in the vehicle, talkativeness, radio preference, and desired member age and gender.

If a group of users is successfully matched, the service will provide each user with the address and contact information for the other group members. Group members will then be able to edit a shared weekly schedule and receive alerts based on this schedule for when they need to leave or should expect the carpool to arrive.
	
Moderators will be able to approve and deny requests to subscribe to a target location from users and other moderators. Moderators will also be able to view the list of users subscribed to a location and remove users from that list. Finally, moderators will be able to read reports from users in order to decide whether users should be removed from the subscribed users list.

## Not in scope

These requirements are intentionally left out of the design requirements so as to help guide project development and keep the scope manageable.

* We will not consider the case for users who wish to add a waypoint to their trip, such as a coffee stop or trip to the gas station.
* We will not consider user accounts who have no vehicle and wish to participate in other ways, such as providing money or other services to group members.
* While we may consider adding the ability for users to set custom departure and arrival times for each weekday, we will assume that departure and arrival time do not change from week to week.
* We will allow users to set a weekly repeating shift schedule, but will assume that schedules are the same for each week.
* While moderators will not be able to see users private location and settings, administrators will be able to for the purpose of demonstration.
* Security beyond basic password locks and data encapsulation will not be considered.

## Technical Requirements

* Knowledge of graph theory
* Knowledge of Angular
* Knowledge of Go (net/http and database/sql)
* SQL proficiency
* Integration with a Maps API for distance calculations and trip planning.

## Team Members

* Chris Phang
* Renzo Pretto
* Ganesh Sundar
* Daniel Johnson


