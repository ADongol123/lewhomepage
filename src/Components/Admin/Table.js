
import React from "react";
import "./Table.css";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function Table() {
  return (
    <div class="container">
      <h2>
        Responsive Tables Using LI <small>Triggers on 767px</small>
      </h2>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Id</div>
          <div class="col col-2">Customer Name</div>
          <div class="col col-3">Message</div>
          <div class="col col-4">Action</div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">
            5
          </div>
          <div class="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div class="col col-3" data-label="Message">
            MessageMessageMessageMessage
            MessageMessageMessageMessageMessageMessageMessageMessage
          </div>
          <div class="col col-4" data-label="Action">
          <IconButton aria-label="delete">
            <DeleteIcon color="error"/>
          </IconButton>
          </div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">
            5
          </div>
          <div class="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div class="col col-3" data-label="Message">
            MessageMessageMessageMessage
            MessageMessageMessageMessageMessageMessageMessageMessage
          </div>
          <div class="col col-4" data-label="Action">
          <IconButton aria-label="delete">
            <DeleteIcon color="error"/>
          </IconButton>
          </div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">
            5
          </div>
          <div class="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div class="col col-3" data-label="Message">
            MessageMessageMessageMessage
            MessageMessageMessageMessageMessageMessageMessageMessage
          </div>
          <div class="col col-4" data-label="Action">
          <IconButton aria-label="delete">
            <DeleteIcon color="error"/>
          </IconButton>
          </div>
        </li>
        <li class="table-row">
          <div class="col col-1" data-label="Job Id">
            5
          </div>
          <div class="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div class="col col-3" data-label="Message">
            MessageMessageMessageMessage
            MessageMessageMessageMessageMessageMessageMessageMessage
          </div>
          <div class="col col-4" data-label="Action">
          <IconButton aria-label="delete">
            <DeleteIcon color="error"/>
          </IconButton>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Table;
