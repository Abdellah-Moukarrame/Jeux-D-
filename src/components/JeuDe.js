import React from "react";

export default class JeuDe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, fin: false };
    }

    jouer() {
        if (this.state.fin) {
            return true;
        }

        const valeur = Math.floor(Math.random() * 6) + 1;
        this.setState({ face: valeur, compteur: this.state.compteur + 1 });

        if (valeur === this.props.cache) {
            this.setState({ fin: true });
        }
    }

    getImage() {
        if (this.state.face === null) {
            return "images/default.png";
        } else {
            return `images/dice${this.state.face}.png`;
        }
    }

    initialiser() {
        this.setState({ face: null, compteur: 0, fin: false });
    }

    render() {
        const containerStyle = {
          textAlign: "center",
          marginTop: "20px",
          backgroundColor: "#808080", // Gray background color
          padding: "20px", // Add padding for better appearance
          borderRadius: "10px", // Add border-radius for rounded corners
        };
    
        const imageStyle = {
          width: "60px",
          height: "60px",
          border: "2px solid black",
          borderRadius: "15px",
          margin: "auto",
          marginTop: "15px",
        };
    
        const buttonStyle = {
          backgroundColor: "#10edfd",
          color: "#080808",
          padding: "10px 20px",
          fontSize: "16px",
          margin: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        };
    
        const successMessageStyle = {
          color: "#4caf50",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "10px",
        };
    
        return (
          <div style={containerStyle}>
            <img src="images/de.png" alt="Dé" width="200px" />
            <h1>Jeu Dé</h1>
            <h2>face: {this.state.face}</h2>
            <img src={this.getImage()} style={imageStyle} alt={`Face ${this.state.face}`} />
            <h2>nombre d'essais: {this.state.compteur}</h2>
            <button
              style={buttonStyle}
              onClick={() => this.jouer()}
            >
              Jouer
            </button>
            {this.state.fin && (
              <p style={successMessageStyle}>
                Bravo vous avez trouvé la face cachée.....
              </p>
            )}
            <button
              style={buttonStyle}
              onClick={() => this.initialiser()}
            >
              Initialiser
            </button>
          </div>
        );
      }
    }