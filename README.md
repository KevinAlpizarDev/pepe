.show-modal {
font-size: 2rem;
font-weight: 600;
padding: 1.75rem 3.5rem;
margin: 5rem 2rem;
border: none;
background-color: #643030;
color: #ffffff;
border-radius: 10rem;
cursor: pointer;
}

.close-modal {
position: absolute;
top: 1.2rem;
right: 2rem;
font-size: 5rem;
color: #333;
cursor: pointer;
border: none;
background: none;
}

h1 {
font-size: 2.5rem;
margin-bottom: 2rem;
}

p {
font-size: 1.8rem;
}

/_ -------------------------- _/
/_ CLASSES TO MAKE MODAL WORK _/
.hidden {
display: none;
}

.modal {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 70%;

    background-color: white;
    padding: 6rem;
    border-radius: 5px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    z-index: 10;

}

.overlay {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(3px);
z-index: 5;
}