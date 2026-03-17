// referralController.js

class ReferralController {
    constructor() {
        this.referrals = [];
        this.commissionRate = 0.1; // 10% commission rate
    }

    addReferral(referrerId, referredId) {
        this.referrals.push({ referrerId, referredId });
    }

    calculateCommission(referrerId) {
        const referralCount = this.referrals.filter(referral => referral.referrerId === referrerId).length;
        return referralCount * this.commissionRate;
    }
}

module.exports = new ReferralController();