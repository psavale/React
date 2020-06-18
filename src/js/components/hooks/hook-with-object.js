import React, { useState } from 'react';

function HookWithObject() {

    const [name, setName] = useState({ FirstName: '', LastName: '' })

    return (
        <div>
            <form>
                <input type="text"
                    onChange={(e) => setName({ ...name, FirstName: e.target.value })}></input>

                <input type="text"
                    onChange={(e) => setName({ ...name, LastName: e.target.value })}></input>

                <h2> first name is - {name.FirstName}</h2>
                <h2> last name is - {name.LastName}</h2>

            </form>
        </div>
    );
}

export default HookWithObject;