import React from 'react';
import { Alert } from 'antd';

const DisplayMessage = ({bearerToken, noVisibleSecrets, error}) => {
  return (
    <div>
      {bearerToken.length !== 0 && <Alert
          message="Visible Secret!"
          description={`Your secret is visible! It is ${bearerToken}`}
          type="error"
        />
      }
      {noVisibleSecrets && <Alert
          message="Great job!"
          description="Your Bearer token is not exposed!"
          type="success"
        />}
      {error && <Alert
          message="Error!"
          description="There was an error fetching tweets. Are you sure your token was valid?"
          type="error"
      />}
    </div>
  )
}

export default DisplayMessage;
