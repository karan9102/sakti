/* =========================================================
   AGE VERIFICATION GATE
   ========================================================= */
(function ageGate() {
    const gate = document.getElementById('ageGate');
    if (!gate) return;

    if (storageGet(AGE_KEY) === 'true') {
        gate.classList.add('hidden');
        return;
    }

    document.body.classList.add('no-scroll');

    document.getElementById('ageYes').addEventListener('click', () => {
        storageSet(AGE_KEY, 'true');
        gate.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });

    document.getElementById('ageNo').addEventListener('click', () => {
        document.getElementById('ageDenied').classList.add('show');
    });
})();
