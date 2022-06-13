import React from 'react'

function Nav() {
    const currentuser =JSON.parse(localStorage.getItem('user'));
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <b><a class="navbar-brand" href="#name">Hotel Glory</a></b>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" >
                       {currentuser ? (<><h1  style={{float:'right'}}>{currentuser.username}</h1></>):(<><h1>Welcome</h1></>)};
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav