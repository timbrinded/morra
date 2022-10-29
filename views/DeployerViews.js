import React from "react";
import PlayerViews from "./PlayerViews";

const exports = { ...PlayerViews };

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Deployer">
        <h2>Host</h2>
        {content}
      </div>
    );
  }
};

exports.SetWager = class extends React.Component {
  render() {
    const { parent, defaultWager, standardUnit } = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div>
        <div>
          <input
            type="number"
            placeholder={defaultWager}
            onChange={(e) => this.setState({ wager: e.currentTarget.value })}
          />{" "}
          {standardUnit}
        </div>
        <br />
        <div>
          <button onClick={() => parent.setWager(wager)}>Confirm Wager</button>
        </div>
      </div>
    );
  }
};

exports.Deploy = class extends React.Component {
  render() {
    const { parent, wager, standardUnit } = this.props;
    return (
      <div>
        <div>
          You are about to wager: <strong>{wager}</strong> {standardUnit}
        </div>
        <br />
        <div>
          <button onClick={() => parent.deploy()}>Initiate Game 🚀</button>
        </div>
      </div>
    );
  }
};

exports.Deploying = class extends React.Component {
  render() {
    return <div>Deploying... please wait. ⏱️</div>;
  }
};

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const { ctcInfoStr } = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = "Copied!";
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const { ctcInfoStr } = this.props;
    return (
      <div>
        Waiting for Guest to join...⏱️
        <br /> Please give them this contract info:
        <pre className="ContractInfo">{ctcInfoStr}</pre>
        <button onClick={(e) => this.copyToClipboard(e.currentTarget)}>Copy to clipboard 📋️ </button>
      </div>
    );
  }
};

export default exports;
