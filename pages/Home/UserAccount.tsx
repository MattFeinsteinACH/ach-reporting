import styles from "../../styles/UserAccount.module.css";
import {Button} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export default function UserAccount(): JSX.Element{
    return(
        <>
            <section>
                <h1>View Your Account</h1>
                <p>From here you can view your profile data and use the list of actions to help manage your account.</p>
                <div className={styles.AccountPageContent}>
                    <div className={styles.pageContent}>
                        <h3>Your Account Profile</h3>
                        <div className={styles.pageContentRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.infoLbl}>Email</label>
                                <label className={styles.dataLbl}>youremail@email.com</label>
                            </div>
                        </div>
                        <div className={styles.pageContentRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.infoLbl}>First Name</label>
                                <label className={styles.dataLbl}>Matt</label>
                            </div>
                        </div>
                        <div className={styles.pageContentRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.infoLbl}>Last Name</label>
                                <label className={styles.dataLbl}>Feinstein</label>
                            </div>
                        </div>
                        <div className={styles.pageContentRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.infoLbl}>Time Zone</label>
                                <label className={styles.dataLbl}>(UTC-05) Eastern Time (US & Canada)</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pageContent} style={{marginRight: "0px"}}>
                        <h3>Account Management</h3>
                        <p>You are currently signed in using a Heartland domain account. All account changes must be made through the Heartland domain system.</p>
                        <div className="buttonGroupHldr">
                            <Button size="large" variant="outlined" className={styles.accountBtn} startIcon={<KeyboardArrowLeftIcon/>}>Go Back to Portal</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}