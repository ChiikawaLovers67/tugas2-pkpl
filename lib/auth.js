const WHITELIST = [
    "mnadhifibr@gmail.com",
    "ahmad.faiq41@ui.ac.id",
    "faiq59502@gmail.com",
    "nayahsaffanah@gmail.com",
    "mairaazsh@gmail.com",
    "naailakhadijah@gmail.com"
];

export function isMember(session) {
    if (!session?.user?.email) return false;
    return WHITELIST.includes(session.user.email);
}