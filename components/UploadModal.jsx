import { modalState } from '@/atom/modalAtom';
import {useRecoilState} from 'recoil';

export default function UploadModal() {

    const [open, setOpen] = useRecoilState(modalState);
  return (
    <>
        <div>UploadModal</div>

{open && <h1>Modal is Open</h1>}
    </>

  )
}
