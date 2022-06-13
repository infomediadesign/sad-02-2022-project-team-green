import React from 'react'

function Nav() {
    const currentuser = JSON.parse(localStorage.getItem('user'));
    function logout(){
        localStorage.removeItem('user');
        window.location.href="/login";
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <b><a class="navbar-brand" href="#name">Hotel Glory</a></b>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" >
                        {currentuser ? (<><div class="btn-group">
                            <button type="button" class="btn btn-Success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                {currentuser.username}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/mybooking">My Bookings</a></li>
                                <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                            </ul>
                        </div></>) : (<><a href='/signup'>Signup</a></>)};
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav