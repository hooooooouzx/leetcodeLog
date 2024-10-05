function maxProfit(prices: number[]): number {
    let buy:number = prices[0];
    let profit:number = 0;
    for(let i:number = 0 ; i < prices.length ; i++){
        if(buy > prices[i]){
            buy = prices[i]
        }else if(buy < prices[i]){
            let difference:number = prices[i] - buy;
            profit = profit + difference;
            buy = prices[i];
        }
    }
    return profit;
};

/**
 * 
 * Your solution to the problem is on the right track, but there are some areas for improvement:

    ### Issues in Your Code
    1. **Resetting `buy` Price:** In your current implementation, you reset the `buy` variable to the selling price after a sale, which doesn't accurately represent the buy price for the next transaction. You should only update `buy` if you find a lower price before a sale.

    2. **Logic for Buying and Selling:** You don't need to track `buy` in this way. Instead, you can simply add the profit for every price increase.

    ### Improved Solution
    Here’s an optimized version of your function that follows a simpler approach:

    ```typescript
    function maxProfit(prices: number[]): number {
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            // If the price today is greater than the price yesterday, add the difference to profit
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }

        return profit;
    }
    ```

    ### Explanation
    - **Iterate through the array:** Start from the second day and compare the price with the previous day.
    - **Calculate profit:** Whenever the current price is greater than the previous day's price, add the difference to the profit. This simulates buying the stock the day before and selling it today.

    ### Time Complexity
    - The time complexity remains \(O(n)\), where \(n\) is the length of the prices array. This is optimal for this problem.

    ### Conclusion
    Your original approach had some good ideas, but simplifying the logic can help avoid potential issues and make the code cleaner. The revised solution accurately captures the maximum profit by taking advantage of every price increase.
 * 
 */