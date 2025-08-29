import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
export default function ProductDialog() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="alert-dialog-title">
          <div>Use Google's location service?</div>
        </DialogTitle>
      </Dialog>
    </>
  );
}