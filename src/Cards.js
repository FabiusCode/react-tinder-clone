import { SwipeableDrawer } from '@material-ui/core'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './Cards.css'

function Cards() {
    const [people, setPeople] = useState([{
        name: 'Elizabeth Olsen',
        url: 'https://i.pinimg.com/originals/13/3d/a9/133da971955183262ce580c87b5b01fd.jpg',
    }])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the sreen")
    }


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={"up", "down"}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: 'url('+ person.url +')'}}
                        className="card">
                            <h3>{person.name}</h3>
                            
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards
