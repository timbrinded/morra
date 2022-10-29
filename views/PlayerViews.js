import React from "react";

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const { parent, playable, submission } = this.props;
    const fingers = (this.state || {}).fingers || 0;
    const total = (this.state || {}).total || 0;
    return (
      <div>
        <div>
          {submission ? "It was a draw! Pick again." : ""}
          <br />
        </div>

        {!playable ? "Please wait..." : ""}
        <br />
        <div>
          {" "}
          🖐️ Choose your Fingers:
          <input
            type="text"
            pattern="[0-9]"
            placeholder="1"
            onChange={(e) => this.setState({ fingers: e.currentTarget.value })}
          />
          <br />
        </div>

        <div>
          🧮 Choose your Total:
          <input
            type="text"
            pattern="[0-9]"
            placeholder="1"
            onChange={(e) => this.setState({ total: e.currentTarget.value })}
          />
          <br />
        </div>
        <div>
          <button onClick={() => parent.playHand(fingers, total)}>Shout your submission 🗣️</button>
          <br />
        </div>
      </div>
    );
  }
};

exports.WaitingForResults = class extends React.Component {
  render() {
    return <div>Waiting for results...⏱️</div>;
  }
};

exports.Done = class extends React.Component {
  render() {
    const { outcome } = this.props;
    return (
      <div>
        <div>
          💫 Thank you for playing. The outcome of this game was:
          <br />
        </div>

        <div>
          <h2>{outcome || "Unknown"}</h2>
        </div>
      </div>
    );
  }
};

exports.Timeout = class extends React.Component {
  render() {
    return <div>☠️ There's been a timeout. (Someone took too long.)</div>;
  }
};

export default exports;
