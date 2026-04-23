// ══════════════════════════════════════════════════════════════
// MOCK TEST DATA — ServiceNow CIS-CSM 2026
// 6 full-length mock tests · 340 questions total
// Correct answers + explanations based on certified CSM knowledge
// ══════════════════════════════════════════════════════════════

// Part 1 and Part 2 are loaded from separate files.
// This file merges them into the single MOCK_TESTS global.

function _buildMockTests() {
  if (typeof MOCK_TESTS_1_3 === 'undefined' || typeof MOCK_TESTS_4_6 === 'undefined') {
    console.error('Mock test data parts not loaded!');
    return [];
  }
  return [...MOCK_TESTS_1_3, ...MOCK_TESTS_4_6];
}

const MOCK_TESTS = _buildMockTests();
