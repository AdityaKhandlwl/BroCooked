"use server";
const MEALDB_BASE = "https://www.themealdb.com/api/json/v1/1";

export async function getRecipeOfTheDay() {
  try {
    const response = await fetch(`${MEALDB_BASE}/random.php`, {
      next: { revalidate: 60 * 60 * 24 }, // Revalidate every 24 hours
    });
    if (!response.ok) {
      throw new Error("Failed to fetch recipe of the day");
    }
    const data = await response.json();
    return data.meals[0]; // Return the first meal from the response
  } catch (error) {
    console.error("Error fetching recipe of the day:", error);
    throw new Error(error.message || "Failed to load recipe");
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${MEALDB_BASE}/list.php?c=list`, {
      next: { revalidate: 7 * 24 * 60 * 60 }, // Revalidate every 7 days
    });
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return {
      success: true,
      categories: data.meals || [], // Return the list of categories or an empty array if not available
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error(error.message || "Failed to load categories");
  }
}

export async function getAreas() {
  try {
    const response = await fetch(`${MEALDB_BASE}/list.php?a=list`, {
      next: { revalidate: 7 * 24 * 60 * 60 }, // Revalidate every 7 days
    });
    if (!response.ok) {
      throw new Error("Failed to fetch areas");
    }
    const data = await response.json();
    return {
      success: true,
      areas: data.meals || [], // Return the list of areas or an empty array if not available
    };
  } catch (error) {
    console.error("Error fetching areas:", error);
    throw new Error(error.message || "Failed to load areas");
  }
}

export async function getMealsByCategories(category) {
  try {
    const response = await fetch(`${MEALDB_BASE}/filter.php?c=${category}`, {
      next: { revalidate: 24 * 60 * 60 }, // Revalidate every 24 hours
    });
    if (!response.ok) {
      throw new Error("Failed to fetch meals by category");
    }
    const data = await response.json();
    return {
      success: true,
      meals: data.meals || [], // Return the list of meals or an empty array if not available
    };
  } catch (error) {
    console.error("Error fetching meals by category:", error);
    throw new Error(error.message || "Failed to load meals");
  }
}

export async function getMealsByArea(area) {
  try {
    const response = await fetch(`${MEALDB_BASE}/filter.php?a=${area}`, {
      next: { revalidate: 24 * 60 * 60 }, // Revalidate every 24 hours
    });
    if (!response.ok) {
      throw new Error("Failed to fetch meals by area");
    }
    const data = await response.json();
    return {
      success: true,
      meals: data.meals || [],
      area, // Return the list of meals or an empty array if not available
    };
  } catch (error) {
    console.error("Error fetching meals by area:", error);
    throw new Error(error.message || "Failed to load meals");
  }
}