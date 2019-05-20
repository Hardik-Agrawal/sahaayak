import React, { Component, Fragment } from "react";
import "./topVendors.css";
import "antd/dist/antd.css";
import { Card, Rate } from "antd";

const { Meta } = Card;

class Topvendors extends Component {
  state = {
    values: [4.5, 5, 4, 5, 3, 4]
  };

  render() {
    return (
      <div>
        <h1>Top Vendors</h1>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src="https://picsum.photos/200" alt="Name" />}
        >
          <div className="Vendor-info">
            <Meta title="Name" description="Service Name" />
            <Rate disabled allowHalf value={this.state.values[0]} />
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src="https://picsum.photos/200" alt="Name" />}
        >
          <div className="Vendor-info">
            <Meta title="Name" description="Service Name" />
            <Rate disabled allowHalf value={this.state.values[1]} />
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src="https://picsum.photos/200" alt="Name" />}
        >
          <div className="Vendor-info">
            <Meta title="Name" description="Service Name" />
            <Rate disabled allowHalf value={this.state.values[2]} />
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src="https://picsum.photos/200" alt="Name" />}
        >
          <div className="Vendor-info">
            <Meta title="Name" description="Service Name" />
            <Rate disabled allowHalf value={this.state.values[3]} />
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src="https://picsum.photos/200" alt="Name" />}
        >
          <div className="Vendor-info">
            <Meta title="Name" description="Service Name" />
            <Rate disabled allowHalf value={this.state.values[4]} />
          </div>
        </Card>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src="https://picsum.photos/200" alt="Name" />}
        >
          <div className="Vendor-info">
            <Meta title="Name" description="Service Name" />
            <Rate disabled allowHalf value={this.state.values[5]} />
          </div>
        </Card>
      </div>
    );
  }
}

export default Topvendors;
