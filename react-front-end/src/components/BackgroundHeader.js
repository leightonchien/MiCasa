import React from 'react'
import './BackgroundHeader.css'

function BackgroundHeader() {
  return (
    <div class="bbbootstrap">
      <div class="container">
      <form />
      <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
      <input type="text" id="Form_Search" value="" placeholder="Search for your best result in our community" role="searchbox" class="InputBox " autocomplete="off" />
      <input type="submit" id="Form_Go" class="Button" value="GO" />
      </div>
</div>
  )
}

export default BackgroundHeader
