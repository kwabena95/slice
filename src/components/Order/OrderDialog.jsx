import { Dialog, DialogContent, DialogFooter, DialogShadow, ConfirmButton } from '../FoodDialog/FoodDialog';


const OrderDialog = ({ openOrderDialog, setOpenOrderDialog, setOrders }) => {
    return openOrderDialog ? <>
        <DialogShadow />
        <Dialog>
            <DialogContent>
                <h2>Your order is on the way!</h2> <br />
                <p>You have been emailed a confirmation of your order. Thanks for choosing Slice.</p>
            </DialogContent>
            <DialogFooter>
                <ConfirmButton onClick={() => {
                    setOrders([]);
                    setOpenOrderDialog();
                }}>
                    I'm still hungry
                </ConfirmButton>
            </DialogFooter>
        </Dialog>
    </> : <div />
}

export default OrderDialog
