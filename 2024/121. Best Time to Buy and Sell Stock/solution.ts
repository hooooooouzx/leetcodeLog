function maxProfit(prices: number[]): number {
    let buy:number = prices[0];
    let profit:number = 0;
    for(let index:number = 1 ; index < prices.length ; index++){
        if(prices[index] < buy){
            buy = prices[index]
        }else if(prices[index] - buy > profit){
            profit = prices[index] - buy;
        }
    }
    return profit;
};

/**
 * To solve the "Best Time to Buy and Sell Stock" problem efficiently, you can use a single-pass algorithm with a time complexity of O(n). Here's the approach:

### Algorithm

    1. **Initialize Variables**:
    - Set `min_price` to a very high value (e.g., infinity).
    - Set `max_profit` to 0.

    2. **Iterate Through Prices**:
    - For each price in the array:
        - Update `min_price` to be the minimum of the current `min_price` and the current price.
        - Calculate the potential profit by subtracting `min_price` from the current price.
        - Update `max_profit` to be the maximum of the current `max_profit` and the calculated potential profit.

    3. **Return `max_profit`** after completing the iteration.

    ### Python Code Example

    ```python
    def maxProfit(prices):
        min_price = float('inf')
        max_profit = 0
        
        for price in prices:
            min_price = min(min_price, price)
            profit = price - min_price
            max_profit = max(max_profit, profit)
        
        return max_profit
    ```

    ### Explanation of the Code

    - The loop iterates through each price once (O(n) time complexity).
    - The `min_price` keeps track of the lowest price encountered so far.
    - The `max_profit` is updated based on the difference between the current price and `min_price`.

    ### Example

    For the input `prices = [7, 1, 5, 3, 6, 4]`:
    - On day 1, `min_price` is updated to 1.
    - On day 5, `max_profit` becomes 5 (6 - 1).

    This method ensures that you achieve the maximum profit with minimal computational resources.
 * 
 */