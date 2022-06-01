import React from 'react'

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#name">Hotel Management</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#option">Home<span class="sr-only"></span></a>
                        <a class="nav-item nav-link" href="#options">Features</a>
                        <a class="nav-item nav-link" href="#optionss">Pricing</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav