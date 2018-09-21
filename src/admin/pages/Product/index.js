import React, { Component } from 'react'
import SortableTbl from 'react-sort-search-table'

let MyData = 
[
    {
        "cat": 1,
        "_id": "d-rhe-428-j",
        "imageUrl": "img/products/rhe-428-j.png",
        "name": "RHE-428-J (4ch Compact)",
        "brand": "iCATCH",
        "type":"HD-SDI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA"
    },
    {
        "cat": 1,
        "_id": "srd-482",
        "imageUrl": "img/products/srd-482-2.jpg",
        "name": "SRD-482 (4ch)",
        "brand": "Samsung",
        "type":"HD-SDI",
        "channel":4,
        "remote":"LAN, ie, iPhone, iPad, Android, 3G mobile",
        "backup":"USB, Network",
        "videoout":"HDMI, VGA"
    },
]

let tHead = [
        "Image",
        "Model",
        "Brand",
        "Type",
        "Channel",
        "Remote",
        "Backup",
        "HDD",
        "Video output",
		"Delete", 
		"Edit"		
	];

let col = [
        "imageUrl",
        "name",
        "brand",
        "type",
        "channel",
        "remote",
        "backup",
        "HDD",
        "videoout",
		"delete", 
		"edit"
	];

export class Product extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <span>
            Product
          </span>
        </div>
        <div className="panel-body">
          <h1>TESTING MODULE</h1>
          List all the product
          <SortableTbl tblData={MyData}
            tHead={tHead}
            // customTd={[
            //       {custd: BaseProductTblImageComponent, keyItem: "imageUrl"},
            //       {custd: BaseProductEditComponent, keyItem: "edit"},
            //       {custd: BaseProductDeleteComponent, keyItem: "delete"}
            //       ]}
            dKey={col}
            search={true}
            defaultCSS={true}			
          />
        </div>
      </div>
    )
  }
}

export default Product
