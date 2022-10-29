import React from "react";

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>👋 Morra! 🇮🇹</h1>
          {content}
        </header>
      </div>
    );
  }
};

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        <div>🕰️ Please wait while we connect to your account.</div>
        <div>If this takes more than a few seconds, there may be something wrong.</div>
      </div>
    );
  }
};

exports.FundAccount = class extends React.Component {
  render() {
    const { bal, standardUnit, defaultFundAmt, parent } = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type="number"
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({ amt: e.currentTarget.value })}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
};

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <span>🚀 Set wager and deploy Contract </span>
          <span>
            <button onClick={() => parent.selectDeployer()}>Host</button>
          </span>
        </p>
        <p>
          <span>📡 Join contract in progress </span>
          <span>
            <button onClick={() => parent.selectAttacher()}>Guest</button>
          </span>
        </p>
      </div>
    );
  }
};

export default exports;
