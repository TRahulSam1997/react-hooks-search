import { useState, useContext } from 'react';
import UserContext, {UserState} from '../lib/store';

const ConsumerComponent = () => {
    const user = useContext<UserState>(UserContext);

    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

const UseContextComponent = () => {
    const [user, setUser] = useState<UserState>({
        first: "Jane",
        last: "Smith"
    });

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button
                onClick={() => setUser({
                    first: "Shannon",
                    last: "Van Twuyver"
                })}
            >Change Context</button>
        </UserContext.Provider>
    )
}

export default UseContextComponent;